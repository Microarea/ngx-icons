import * as i0 from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

declare class IconsComponent {
    _icon: string;
    set icon(icon: any);
    get icon(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconsComponent, "m4-icon", never, { "icon": { "alias": "icon"; "required": false; }; }, {}, never, never, false, never>;
}

declare class TbIconsModule {
    static forRoot(): ModuleWithProviders<TbIconsModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbIconsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TbIconsModule, [typeof IconsComponent], never, [typeof IconsComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TbIconsModule>;
}

export { IconsComponent, TbIconsModule };
