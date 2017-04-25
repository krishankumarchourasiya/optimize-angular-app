/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
System.register(["@angular/core", "./module.lazy", "@angular/common", "@angular/router", "@angular/platform-browser", "./welcome/welcome.module", "./welcome/welcome.ngfactory", "./app.ngfactory", "./welcome/welcome"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var import0, import1, import2, import3, import4, import5, import6, import7, import8, AppLazyModuleInjector, AppLazyModuleNgFactory;
    return {
        setters: [
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
            },
            function (import2_1) {
                import2 = import2_1;
            },
            function (import3_1) {
                import3 = import3_1;
            },
            function (import4_1) {
                import4 = import4_1;
            },
            function (import5_1) {
                import5 = import5_1;
            },
            function (import6_1) {
                import6 = import6_1;
            },
            function (import7_1) {
                import7 = import7_1;
            },
            function (import8_1) {
                import8 = import8_1;
            }
        ],
        execute: function () {/**
             * @fileoverview This file is generated by the Angular template compiler.
             * Do not edit.
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
             */
            /* tslint:disable */
            AppLazyModuleInjector = (function (_super) {
                __extends(AppLazyModuleInjector, _super);
                function AppLazyModuleInjector(parent) {
                    return _super.call(this, parent, [
                        import6.WelcomeNgFactory,
                        import7.AppNgFactory
                    ], [import7.AppNgFactory]) || this;
                }
                Object.defineProperty(AppLazyModuleInjector.prototype, "_LOCALE_ID_23", {
                    get: function () {
                        if ((this.__LOCALE_ID_23 == null)) {
                            (this.__LOCALE_ID_23 = import0.ɵn(this.parent.get(import0.LOCALE_ID, null)));
                        }
                        return this.__LOCALE_ID_23;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_NgLocalization_24", {
                    get: function () {
                        if ((this.__NgLocalization_24 == null)) {
                            (this.__NgLocalization_24 = new import2.NgLocaleLocalization(this._LOCALE_ID_23));
                        }
                        return this.__NgLocalization_24;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_APP_ID_25", {
                    get: function () {
                        if ((this.__APP_ID_25 == null)) {
                            (this.__APP_ID_25 = import0.ɵg());
                        }
                        return this.__APP_ID_25;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_IterableDiffers_26", {
                    get: function () {
                        if ((this.__IterableDiffers_26 == null)) {
                            (this.__IterableDiffers_26 = import0.ɵl());
                        }
                        return this.__IterableDiffers_26;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_KeyValueDiffers_27", {
                    get: function () {
                        if ((this.__KeyValueDiffers_27 == null)) {
                            (this.__KeyValueDiffers_27 = import0.ɵm());
                        }
                        return this.__KeyValueDiffers_27;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_DomSanitizer_28", {
                    get: function () {
                        if ((this.__DomSanitizer_28 == null)) {
                            (this.__DomSanitizer_28 = new import4.ɵe(this.parent.get(import4.DOCUMENT)));
                        }
                        return this.__DomSanitizer_28;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_Sanitizer_29", {
                    get: function () {
                        if ((this.__Sanitizer_29 == null)) {
                            (this.__Sanitizer_29 = this._DomSanitizer_28);
                        }
                        return this.__Sanitizer_29;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_30", {
                    get: function () {
                        if ((this.__HAMMER_GESTURE_CONFIG_30 == null)) {
                            (this.__HAMMER_GESTURE_CONFIG_30 = new import4.HammerGestureConfig());
                        }
                        return this.__HAMMER_GESTURE_CONFIG_30;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_31", {
                    get: function () {
                        if ((this.__EVENT_MANAGER_PLUGINS_31 == null)) {
                            (this.__EVENT_MANAGER_PLUGINS_31 = [
                                new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
                                new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
                                new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT), this._HAMMER_GESTURE_CONFIG_30)
                            ]);
                        }
                        return this.__EVENT_MANAGER_PLUGINS_31;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_EventManager_32", {
                    get: function () {
                        if ((this.__EventManager_32 == null)) {
                            (this.__EventManager_32 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_31, this.parent.get(import0.NgZone)));
                        }
                        return this.__EventManager_32;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_\u0275DomSharedStylesHost_33", {
                    get: function () {
                        if ((this.__ɵDomSharedStylesHost_33 == null)) {
                            (this.__ɵDomSharedStylesHost_33 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT)));
                        }
                        return this.__ɵDomSharedStylesHost_33;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_\u0275DomRendererFactory2_34", {
                    get: function () {
                        if ((this.__ɵDomRendererFactory2_34 == null)) {
                            (this.__ɵDomRendererFactory2_34 = new import4.ɵDomRendererFactory2(this._EventManager_32, this._ɵDomSharedStylesHost_33));
                        }
                        return this.__ɵDomRendererFactory2_34;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_RendererFactory2_35", {
                    get: function () {
                        if ((this.__RendererFactory2_35 == null)) {
                            (this.__RendererFactory2_35 = this._ɵDomRendererFactory2_34);
                        }
                        return this.__RendererFactory2_35;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_\u0275SharedStylesHost_36", {
                    get: function () {
                        if ((this.__ɵSharedStylesHost_36 == null)) {
                            (this.__ɵSharedStylesHost_36 = this._ɵDomSharedStylesHost_33);
                        }
                        return this.__ɵSharedStylesHost_36;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_Testability_37", {
                    get: function () {
                        if ((this.__Testability_37 == null)) {
                            (this.__Testability_37 = new import0.Testability(this.parent.get(import0.NgZone)));
                        }
                        return this.__Testability_37;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_Meta_38", {
                    get: function () {
                        if ((this.__Meta_38 == null)) {
                            (this.__Meta_38 = new import4.Meta(this.parent.get(import4.DOCUMENT)));
                        }
                        return this.__Meta_38;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_Title_39", {
                    get: function () {
                        if ((this.__Title_39 == null)) {
                            (this.__Title_39 = new import4.Title(this.parent.get(import4.DOCUMENT)));
                        }
                        return this.__Title_39;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_ActivatedRoute_40", {
                    get: function () {
                        if ((this.__ActivatedRoute_40 == null)) {
                            (this.__ActivatedRoute_40 = import3.ɵf(this._Router_19));
                        }
                        return this.__ActivatedRoute_40;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_PreloadSelectedModules_41", {
                    get: function () {
                        if ((this.__PreloadSelectedModules_41 == null)) {
                            (this.__PreloadSelectedModules_41 = new import1.PreloadSelectedModules());
                        }
                        return this.__PreloadSelectedModules_41;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_PreloadingStrategy_42", {
                    get: function () {
                        if ((this.__PreloadingStrategy_42 == null)) {
                            (this.__PreloadingStrategy_42 = this._PreloadSelectedModules_41);
                        }
                        return this.__PreloadingStrategy_42;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_RouterPreloader_43", {
                    get: function () {
                        if ((this.__RouterPreloader_43 == null)) {
                            (this.__RouterPreloader_43 = new import3.RouterPreloader(this._Router_19, this._NgModuleFactoryLoader_17, this._Compiler_16, this, this._PreloadingStrategy_42));
                        }
                        return this.__RouterPreloader_43;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_NoPreloading_44", {
                    get: function () {
                        if ((this.__NoPreloading_44 == null)) {
                            (this.__NoPreloading_44 = new import3.NoPreloading());
                        }
                        return this.__NoPreloading_44;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_PreloadAllModules_45", {
                    get: function () {
                        if ((this.__PreloadAllModules_45 == null)) {
                            (this.__PreloadAllModules_45 = new import3.PreloadAllModules());
                        }
                        return this.__PreloadAllModules_45;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_ROUTER_INITIALIZER_46", {
                    get: function () {
                        if ((this.__ROUTER_INITIALIZER_46 == null)) {
                            (this.__ROUTER_INITIALIZER_46 = import3.ɵi(this._ɵg_3));
                        }
                        return this.__ROUTER_INITIALIZER_46;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppLazyModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_47", {
                    get: function () {
                        if ((this.__APP_BOOTSTRAP_LISTENER_47 == null)) {
                            (this.__APP_BOOTSTRAP_LISTENER_47 = [this._ROUTER_INITIALIZER_46]);
                        }
                        return this.__APP_BOOTSTRAP_LISTENER_47;
                    },
                    enumerable: true,
                    configurable: true
                });
                AppLazyModuleInjector.prototype.createInternal = function () {
                    this._CommonModule_0 = new import2.CommonModule();
                    this._ErrorHandler_1 = import4.ɵa();
                    this._NgProbeToken_2 = [import3.ɵb()];
                    this._ɵg_3 = new import3.ɵg(this);
                    this._APP_INITIALIZER_4 = [
                        import0.ɵo,
                        import4.ɵc(this.parent.get(import4.NgProbeToken, null), this._NgProbeToken_2),
                        import3.ɵh(this._ɵg_3)
                    ];
                    this._ApplicationInitStatus_5 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_4);
                    this._ɵf_6 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_1, this.componentFactoryResolver, this._ApplicationInitStatus_5);
                    this._ApplicationRef_7 = this._ɵf_6;
                    this._ApplicationModule_8 = new import0.ApplicationModule(this._ApplicationRef_7);
                    this._BrowserModule_9 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
                    this._ɵa_10 = import3.ɵd(this.parent.get(import3.Router, null));
                    this._UrlSerializer_11 = new import3.DefaultUrlSerializer();
                    this._RouterOutletMap_12 = new import3.RouterOutletMap();
                    this._ROUTER_CONFIGURATION_13 = {
                        useHash: true,
                        preloadingStrategy: import1.PreloadSelectedModules
                    };
                    this._LocationStrategy_14 = import3.ɵc(this.parent.get(import2.PlatformLocation), this.parent.get(import2.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_13);
                    this._Location_15 = new import2.Location(this._LocationStrategy_14);
                    this._Compiler_16 = new import0.Compiler();
                    this._NgModuleFactoryLoader_17 = new import0.SystemJsNgModuleLoader(this._Compiler_16, this.parent.get(import0.SystemJsNgModuleLoaderConfig, null));
                    this._ROUTES_18 = [[
                            {
                                path: '',
                                component: import8.Welcome
                            },
                            {
                                path: 'list',
                                loadChildren: 'app/list/list.module#ListModule'
                            },
                            {
                                path: 'subscribe',
                                loadChildren: 'app/subscribe/subscribe.module#SubscribeModule'
                            },
                            {
                                path: 'search',
                                loadChildren: 'app/search/search.module#SearchModule'
                            }
                        ]
                    ];
                    this._Router_19 = import3.ɵe(this._ApplicationRef_7, this._UrlSerializer_11, this._RouterOutletMap_12, this._Location_15, this, this._NgModuleFactoryLoader_17, this._Compiler_16, this._ROUTES_18, this._ROUTER_CONFIGURATION_13, this.parent.get(import3.UrlHandlingStrategy, null), this.parent.get(import3.RouteReuseStrategy, null));
                    this._RouterModule_20 = new import3.RouterModule(this._ɵa_10, this._Router_19);
                    this._WelcomeModule_21 = new import5.WelcomeModule();
                    this._AppLazyModule_22 = new import1.AppLazyModule();
                    return this._AppLazyModule_22;
                };
                AppLazyModuleInjector.prototype.getInternal = function (token, notFoundResult) {
                    if ((token === import2.CommonModule)) {
                        return this._CommonModule_0;
                    }
                    if ((token === import0.ErrorHandler)) {
                        return this._ErrorHandler_1;
                    }
                    if ((token === import0.NgProbeToken)) {
                        return this._NgProbeToken_2;
                    }
                    if ((token === import3.ɵg)) {
                        return this._ɵg_3;
                    }
                    if ((token === import0.APP_INITIALIZER)) {
                        return this._APP_INITIALIZER_4;
                    }
                    if ((token === import0.ApplicationInitStatus)) {
                        return this._ApplicationInitStatus_5;
                    }
                    if ((token === import0.ɵf)) {
                        return this._ɵf_6;
                    }
                    if ((token === import0.ApplicationRef)) {
                        return this._ApplicationRef_7;
                    }
                    if ((token === import0.ApplicationModule)) {
                        return this._ApplicationModule_8;
                    }
                    if ((token === import4.BrowserModule)) {
                        return this._BrowserModule_9;
                    }
                    if ((token === import3.ɵa)) {
                        return this._ɵa_10;
                    }
                    if ((token === import3.UrlSerializer)) {
                        return this._UrlSerializer_11;
                    }
                    if ((token === import3.RouterOutletMap)) {
                        return this._RouterOutletMap_12;
                    }
                    if ((token === import3.ROUTER_CONFIGURATION)) {
                        return this._ROUTER_CONFIGURATION_13;
                    }
                    if ((token === import2.LocationStrategy)) {
                        return this._LocationStrategy_14;
                    }
                    if ((token === import2.Location)) {
                        return this._Location_15;
                    }
                    if ((token === import0.Compiler)) {
                        return this._Compiler_16;
                    }
                    if ((token === import0.NgModuleFactoryLoader)) {
                        return this._NgModuleFactoryLoader_17;
                    }
                    if ((token === import3.ROUTES)) {
                        return this._ROUTES_18;
                    }
                    if ((token === import3.Router)) {
                        return this._Router_19;
                    }
                    if ((token === import3.RouterModule)) {
                        return this._RouterModule_20;
                    }
                    if ((token === import5.WelcomeModule)) {
                        return this._WelcomeModule_21;
                    }
                    if ((token === import1.AppLazyModule)) {
                        return this._AppLazyModule_22;
                    }
                    if ((token === import0.LOCALE_ID)) {
                        return this._LOCALE_ID_23;
                    }
                    if ((token === import2.NgLocalization)) {
                        return this._NgLocalization_24;
                    }
                    if ((token === import0.APP_ID)) {
                        return this._APP_ID_25;
                    }
                    if ((token === import0.IterableDiffers)) {
                        return this._IterableDiffers_26;
                    }
                    if ((token === import0.KeyValueDiffers)) {
                        return this._KeyValueDiffers_27;
                    }
                    if ((token === import4.DomSanitizer)) {
                        return this._DomSanitizer_28;
                    }
                    if ((token === import0.Sanitizer)) {
                        return this._Sanitizer_29;
                    }
                    if ((token === import4.HAMMER_GESTURE_CONFIG)) {
                        return this._HAMMER_GESTURE_CONFIG_30;
                    }
                    if ((token === import4.EVENT_MANAGER_PLUGINS)) {
                        return this._EVENT_MANAGER_PLUGINS_31;
                    }
                    if ((token === import4.EventManager)) {
                        return this._EventManager_32;
                    }
                    if ((token === import4.ɵDomSharedStylesHost)) {
                        return this._ɵDomSharedStylesHost_33;
                    }
                    if ((token === import4.ɵDomRendererFactory2)) {
                        return this._ɵDomRendererFactory2_34;
                    }
                    if ((token === import0.RendererFactory2)) {
                        return this._RendererFactory2_35;
                    }
                    if ((token === import4.ɵSharedStylesHost)) {
                        return this._ɵSharedStylesHost_36;
                    }
                    if ((token === import0.Testability)) {
                        return this._Testability_37;
                    }
                    if ((token === import4.Meta)) {
                        return this._Meta_38;
                    }
                    if ((token === import4.Title)) {
                        return this._Title_39;
                    }
                    if ((token === import3.ActivatedRoute)) {
                        return this._ActivatedRoute_40;
                    }
                    if ((token === import1.PreloadSelectedModules)) {
                        return this._PreloadSelectedModules_41;
                    }
                    if ((token === import3.PreloadingStrategy)) {
                        return this._PreloadingStrategy_42;
                    }
                    if ((token === import3.RouterPreloader)) {
                        return this._RouterPreloader_43;
                    }
                    if ((token === import3.NoPreloading)) {
                        return this._NoPreloading_44;
                    }
                    if ((token === import3.PreloadAllModules)) {
                        return this._PreloadAllModules_45;
                    }
                    if ((token === import3.ROUTER_INITIALIZER)) {
                        return this._ROUTER_INITIALIZER_46;
                    }
                    if ((token === import0.APP_BOOTSTRAP_LISTENER)) {
                        return this._APP_BOOTSTRAP_LISTENER_47;
                    }
                    return notFoundResult;
                };
                AppLazyModuleInjector.prototype.destroyInternal = function () {
                    this._ɵf_6.ngOnDestroy();
                    (this.__ɵDomSharedStylesHost_33 && this._ɵDomSharedStylesHost_33.ngOnDestroy());
                    (this.__RouterPreloader_43 && this._RouterPreloader_43.ngOnDestroy());
                };
                return AppLazyModuleInjector;
            }(import0.ɵNgModuleInjector));
            exports_1("AppLazyModuleNgFactory", AppLazyModuleNgFactory = new import0.NgModuleFactory(AppLazyModuleInjector, import1.AppLazyModule));
            //# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21sYXZhbC9kZXYvZ2l0aHViL3BsYXlncm91bmQvb3B0aW1pemUtYW5ndWxhci1hcHAvYXBwL21vZHVsZS5sYXp5Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL21sYXZhbC9kZXYvZ2l0aHViL3BsYXlncm91bmQvb3B0aW1pemUtYW5ndWxhci1hcHAvYXBwL21vZHVsZS5sYXp5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
        }
    };
});
//# sourceMappingURL=module.lazy.ngfactory.js.map