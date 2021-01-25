import { Component } from "@angular/core";
import { Observable, of } from "rxjs";

interface Gear {
  brand: string;
  model: string;
  nbVoice: number;
}

interface Item {
  id: string;
  label: string;
  content: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      .scrollable-content {
        width: 200px;
        height: 100px;
        overflow: auto;
      }
    `,
  ],
})
export class AppComponent {
  public record: Gear[] = [
    {
      brand: "Roland",
      model: "G-800",
      nbVoice: 128,
    },
    {
      brand: "Korg",
      model: "Triton",
      nbVoice: 62,
    },
  ];

  public o$: Observable<Gear>;

  public items: Item[] = [
    {
      id: "gear",
      label: "Gear",
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos iusto laborum dolore quam neque! Enim impedit, a cupiditate dignissimos commodi minima eius perferendis accusamus nihil soluta aspernatur iure culpa? Quisquam!`,
    },
    {
      id: "video",
      label: "Video",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed quisquam veritatis, iure nobis voluptatum, distinctio eum veniam iusto maiores vero soluta ab voluptas minima quas eius consequuntur aliquid. Delectus!`,
    },
  ];

  public itemActive: Item = this.items[0];

  constructor() {
    this.o$ = of(this.record[1]);
  }

  public activeItem(item: Item): void {
    this.itemActive = item;
  }
}
