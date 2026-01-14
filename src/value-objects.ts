export abstract class ValueObject<T> {
  protected readonly value:T

  protected constructor(value:T) {
    this.value = value;
  }

  public equals(vo?: ValueObject<T>):boolean {
    if(!vo) return false;
    if(vo === this) return true;
    if(vo.constructor !== this.constructor) return false;

    return JSON.stringify(this.value) === JSON.stringify(vo.value)
  }

  public getValue():T {
    return this.value
  }
}