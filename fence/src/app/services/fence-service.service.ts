import { Injectable } from '@angular/core';
import { IFence } from '../interfaces/IFence';
import { Fence } from '../data/fenceDate';

@Injectable({
  providedIn: 'root'
})
export class FenceServiceService {

  fence: IFence[] = [];

  constructor() {
    this.fence = Fence;
  }

  getFence() {
    return this.fence;
  }
}
