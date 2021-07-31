import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { AppsComponent } from './apps/apps.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ParaVoceComponent } from './para-voce/para-voce.component';



@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    ServicosComponent,
    AppsComponent,
    ContatosComponent,
    ParaVoceComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuComponent,
    HomeComponent,
    ServicosComponent,
    AppsComponent,
    ContatosComponent,
    ParaVoceComponent
  ]
})
export class MainModule { }
