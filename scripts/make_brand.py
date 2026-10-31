#!/usr/bin/env python3
# ============================================================
# Topo do Rift — Gerador de marca (logo + ícones PWA)
# Ícone estilo Hextech: fundo navy, anel hexagonal dourado e
# coroa ("Topo") com gema teal. Desenha em 4096px (supersampling)
# e exporta logo.svg + PNGs (512/192/180/48 + maskable).
# ============================================================
import math
import os
from PIL import Image, ImageDraw, ImageFilter, ImageChops

ROOT = "/home/z/my-project/public"
ICONS = os.path.join(ROOT, "icons")
os.makedirs(ICONS, exist_ok=True)

# Paleta Hextech (LoL)
NAVY_TOP = (10, 20, 40)       # #0A1428
NAVY_BOTTOM = (16, 29, 50)    # #101D32
GOLD_LIGHT = (240, 230, 210)  # #F0E6D2
GOLD = (200, 170, 110)        # #C8AA6E
GOLD_DARK = (120, 90, 40)     # #785A28
TEAL = (10, 200, 185)         # #0AC8B9

S = 4          # supersampling
BASE = 1024 * S


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def vgrad_rgb(size, top, bottom):
    w, h = size
    col = Image.new("RGB", (1, h))
    px = col.load()
    for y in range(h):
        px[0, y] = lerp(top, bottom, y / max(1, h - 1))
    return col.resize((w, h))


def vgrad_gold(size):
    stops = [(0.0, GOLD_LIGHT), (0.45, GOLD), (1.0, GOLD_DARK)]
    w, h = size
    col = Image.new("RGB", (1, h))
    px = col.load()
    for y in range(h):
        t = y / max(1, h - 1)
        for i in range(len(stops) - 1):
            t0, c0 = stops[i]
            t1, c1 = stops[i + 1]
            if t0 <= t <= t1:
                px[0, y] = lerp(c0, c1, (t - t0) / max(1e-6, t1 - t0))
                break
    return col.resize((w, h))


def hexagon(cx, cy, r):
    rot = -math.pi / 2  # ponta para cima
    return [
        (cx + r * math.cos(rot + i * math.pi / 3),
         cy + r * math.sin(rot + i * math.pi / 3))
        for i in range(6)
    ]


def draw_icon(scale_content=1.0, full_bleed=False):
    """Desenha o ícone em BASE×BASE e devolve um RGB 1024×1024."""
    # ---------- fundo ----------
    img = vgrad_rgb((BASE, BASE), NAVY_TOP, NAVY_BOTTOM).convert("RGB")
    if not full_bleed:
        radius = int(BASE * 0.225)
        mask = Image.new("L", (BASE, BASE), 0)
        ImageDraw.Draw(mask).rounded_rectangle(
            [0, 0, BASE - 1, BASE - 1], radius=radius, fill=255
        )
        img = Image.composite(img, Image.new("RGB", (BASE, BASE), (0, 0, 0)), mask)

    cx = cy = BASE / 2

    # ---------- brilho radial atrás do hexágono (overlay aditivo) ----------
    glow = Image.new("RGB", (BASE, BASE), (0, 0, 0))
    ImageDraw.Draw(glow).polygon(hexagon(cx, cy, BASE * 0.375 * scale_content),
                                 fill=(30, 26, 12))
    glow = glow.filter(ImageFilter.GaussianBlur(BASE * 0.06))
    img = ImageChops.add(img, glow)

    # ---------- anel hexagonal duplo (com sombra suave) ----------
    r_hex = BASE * 0.385 * scale_content
    outer = hexagon(cx, cy, r_hex)
    inner = hexagon(cx, cy, r_hex * 0.90)

    shadow = Image.new("RGB", (BASE, BASE), (0, 0, 0))
    ImageDraw.Draw(shadow).line(outer + [outer[0]], fill=(24, 18, 8),
                                width=int(BASE * 0.026), joint="curve")
    shadow = shadow.filter(ImageFilter.GaussianBlur(BASE * 0.010))
    img = ImageChops.add(img, shadow)
    draw = ImageDraw.Draw(img)

    draw.line(outer + [outer[0]], fill=GOLD_DARK, width=int(BASE * 0.022), joint="curve")
    draw.line(outer + [outer[0]], fill=GOLD, width=int(BASE * 0.013), joint="curve")
    draw.line(inner + [inner[0]], fill=GOLD_DARK, width=int(BASE * 0.006), joint="curve")

    # ---------- coroa (gradiente dourado recortado por máscara) ----------
    crown_w = BASE * 0.34 * scale_content
    crown_h = BASE * 0.24 * scale_content
    crown_cy = cy - BASE * 0.012
    left = cx - crown_w / 2
    right = cx + crown_w / 2
    top = crown_cy - crown_h / 2
    base_y = crown_cy + crown_h / 2

    crown = [
        (left, base_y),
        (left, top + crown_h * 0.22),
        (left + crown_w * 0.18, crown_cy - crown_h * 0.02),
        (left + crown_w * 0.32, top + crown_h * 0.10),
        (cx, top),
        (right - crown_w * 0.32, top + crown_h * 0.10),
        (right - crown_w * 0.18, crown_cy - crown_h * 0.02),
        (right, top + crown_h * 0.22),
        (right, base_y),
    ]

    grad = vgrad_gold((BASE, BASE))
    mask = Image.new("L", (BASE, BASE), 0)
    ImageDraw.Draw(mask).polygon(crown, fill=255)
    img.paste(grad, (0, 0), mask)
    draw = ImageDraw.Draw(img)

    draw.line(crown + [crown[0]], fill=GOLD_DARK, width=int(BASE * 0.006), joint="curve")

    # joias nas pontas
    jewel_r = BASE * 0.021 * scale_content
    for jx, jy in [
        (left, top + crown_h * 0.22),
        (cx, top - jewel_r * 0.4),
        (right, top + crown_h * 0.22),
    ]:
        draw.ellipse(
            [jx - jewel_r, jy - jewel_r, jx + jewel_r, jy + jewel_r],
            fill=GOLD_LIGHT, outline=GOLD_DARK, width=int(BASE * 0.004),
        )

    # gema teal central
    gem = BASE * 0.030 * scale_content
    gcy = crown_cy + crown_h * 0.10
    draw.polygon(
        [(cx, gcy - gem), (cx + gem * 0.75, gcy), (cx, gcy + gem), (cx - gem * 0.75, gcy)],
        fill=TEAL, outline=(6, 110, 100), width=int(BASE * 0.003),
    )

    # barra da base
    bar_h = BASE * 0.030 * scale_content
    draw.rounded_rectangle(
        [left - BASE * 0.014, base_y, right + BASE * 0.014, base_y + bar_h],
        radius=bar_h / 2, fill=GOLD, outline=GOLD_DARK, width=int(BASE * 0.004),
    )

    return img.resize((1024, 1024), Image.LANCZOS)


def save(img, relpath, size=None):
    if size:
        img = img.resize((size, size), Image.LANCZOS)
    path = os.path.join(ROOT, relpath)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path, "PNG", optimize=True)
    print(f"ok: {relpath}")


if __name__ == "__main__":
    main = draw_icon(scale_content=1.0, full_bleed=False)
    save(main, "icons/icon-512.png", 512)
    save(main, "icons/icon-192.png", 192)
    save(main, "icons/apple-touch-icon.png", 180)
    save(main, "icons/favicon-48.png", 48)

    maskable = draw_icon(scale_content=0.74, full_bleed=True)
    save(maskable, "icons/icon-maskable-512.png", 512)
    save(maskable, "icons/icon-maskable-192.png", 192)

    print("Concluído.")
