# Icon Font Library for TaskbuilderWeb App

Libreria che replica le immagini di Mago Desktop in Icon Font in modo da migliorare la velocità di caricamento delle pagine, la scalabilità e le capacità di personalizzazione.

Un icon font è composto da un set predefinito di icone ‘mappate’ ognuna con un carattere. Essendo vettoriale, permette di ridimensionare o cambiare il colore di un'icona semplicemente via CSS.

## Installazione

Per installare questa libreria:

```bash
$ npm install https://github.com/Microarea/ngx-icons.git --save
```

## Utilizzo

Dopo aver installato la libreria, puoi importarla nella tua applicazione Angular all'interno di AppModule:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TbIconsModule } from '@tb/icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TbIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Una volta importata la libreria, puoi usare le icone nel modo seguente:

```xml
<!-- You can now use your library component in app.component.html -->
<m4-icon icon="tb-master"></m4-icon>
<m4-icon icon="erp-cash"></m4-icon>
<m4-icon icon="erp-costaccounting"></m4-icon>
<m4-icon icon="erp-summary"></m4-icon>
```

L'elenco completo delle icone finora incluse nella libreria lo trovi qua: [https://microarea.github.io/ngx-icons-src/](https://microarea.github.io/ngx-icons-src/)
