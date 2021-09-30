import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  carouselList = [
    {
      bannerImg: "./assets/banner_img/img_1.jpg",
      title: "Schuhe günstig kaufen",
      description: "Schuhe versandkostenfrei online bestellen bei AR Shop",
    },
    {
      bannerImg: "./assets/banner_img/img_3.jpg",
      title: "Große Auswahl bekannter Marken",
      description:
        "Im Onlineshop kann sich der Kunde in aller Ruhe die gewünschten Modelle ansehen.",
    },
    {
      bannerImg: "./assets/banner_img/img_4.jpg",
      title: "Für jeden Stil die passenden Schuhe",
      description: "Die Vielfalt der Hersteller und Modelle macht das Einkaufen dabei leicht wie nie zuvor.",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
