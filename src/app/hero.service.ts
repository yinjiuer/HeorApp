import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  
  
  // 修改这个构造函数，添加一个私有的 messageService 属性参数。
  // Angular 将会在创建 HeroService 时把 MessageService 的单例注入到这个属性中。
  constructor(private messageService: MessageService) { }
  // 这是一个典型的“服务中的服务”场景，
  // 你把 MessageService 注入到了 HeroService 中，
  // 而 HeroService 又被注入到了 HeroesComponent 中
}
