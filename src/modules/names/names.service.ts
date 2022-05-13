import { Injectable } from '@nestjs/common';

@Injectable()
export class NamesService {
  private _names: string[];

  constructor() {
    this._names = [];
  }

  createName(name: string) {
    const nameFound = this._names.find(
      (n) => n.toLowerCase().trim() == name.toLowerCase().trim(),
    );
    if (!nameFound) {
      this._names.push(name);
      return true;
    } else {
      return false;
    }
  }

  getNames(start?: string) {
    if (!start) {
      return this._names;
    } else {
      return this._names.filter((x) =>
        x.toLowerCase().trim().startsWith(start.toLowerCase().trim()),
      );
    }
  }

  updateName(name: string, newName: string) {
    const nameFound = this._names.findIndex(
      (n) => n.toLowerCase().trim() == name.toLowerCase().trim(),
    );
    const newNameFound = this._names.findIndex(
      (n) => n.toLowerCase().trim() == newName.toLowerCase().trim(),
    );
    if (nameFound != -1 && newNameFound == -1) {
      this._names[nameFound] = newName;
      return true;
    } else {
      return false;
    }
  }

  deleteName(name: string) {
    const deleteBeforce = this._names.length;
    this._names = this._names.filter(
      (n) => n.toLowerCase().trim() != name.toLowerCase().trim(),
    );
    const deleteAfter = this._names.length;
    return deleteBeforce != deleteAfter;
  }

  clearNames() {
    this._names = [];
    return true;
  }
}
