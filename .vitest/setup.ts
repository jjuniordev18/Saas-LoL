// ============================================================
// Setup global para os testes Vitest
// ============================================================
import "@testing-library/jest-dom";

// Mock para window.matchMedia (necessário para alguns componentes)
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock para ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock para Intersection Observer
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock para PointerEvent (necessário para drag-and-drop)
class MockPointerEvent extends Event {
  pointerId: number = 0;
  width: number = 0;
  height: number = 0;
  pressure: number = 0;
  tangentialPressure: number = 0;
  tiltX: number = 0;
  tiltY: number = 0;
  twist: number = 0;
  pointerType: string = "";
  defaultActionived: boolean = false;

  constructor(type: string, params: MouseEventInit = {}) {
    super(type, params);
    this.pointerId = (params as any).pointerId || 1;
    this.pointerType = (params as any).pointerType || "mouse";
  }
}
window.PointerEvent = MockPointerEvent as any;

// Mock para URL.createObjectURL (necessário para uploads)
Object.defineProperty(URL, "createObjectURL", {
  writable: true,
  value: vi.fn(() => "mock-url"),
});