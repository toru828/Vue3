export default interface CounterStoreType {
  count: number;
  increment: () => void;
  decrement: () => void;
  asyncIncrement: () => void;
  asyncDecrement: () => void;
}
