/**
 * 本地存储工具类
 * 封装 localStorage 和 sessionStorage 操作
 */

type StorageType = 'local' | 'session';

class Storage {
  private getStorage(type: StorageType): globalThis.Storage {
    return type === 'local' ? localStorage : sessionStorage;
  }

  /**
   * 设置存储
   */
  set(key: string, value: any, type: StorageType = 'local'): void {
    const storage = this.getStorage(type);
    storage.setItem(key, JSON.stringify(value));
  }

  /**
   * 获取存储
   */
  get<T = any>(key: string, type: StorageType = 'local'): T | null {
    const storage = this.getStorage(type);
    const value = storage.getItem(key);
    if (value === null) return null;

    try {
      return JSON.parse(value) as T;
    } catch {
      return value as T;
    }
  }

  /**
   * 删除存储
   */
  remove(key: string, type: StorageType = 'local'): void {
    const storage = this.getStorage(type);
    storage.removeItem(key);
  }

  /**
   * 清空存储
   */
  clear(type: StorageType = 'local'): void {
    const storage = this.getStorage(type);
    storage.clear();
  }

  /**
   * 获取所有键
   */
  keys(type: StorageType = 'local'): string[] {
    const storage = this.getStorage(type);
    return Object.keys(storage);
  }
}

export default new Storage();
