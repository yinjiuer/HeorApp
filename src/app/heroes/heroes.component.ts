import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[] = [];
  selectedHero?: Hero;
  
  
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
// 往构造函数中添加一个私有的 heroService，其类型为 HeroService。
// 这个参数声明了一个私有 heroService 属性，同时把它标记为一个 HeroService 的注入点。
// 当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。
constructor(private heroService: HeroService) {}
// 添加 getHeroes()
// 创建一个方法，以从服务中获取这些英雄数据。
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

  ngOnInit(): void {
    this.getHeroes();
  }

}
