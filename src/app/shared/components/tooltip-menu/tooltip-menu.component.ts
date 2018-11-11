import { Component, Input, OnInit } from '@angular/core';
import { TooltipTemplates } from '../../enums/tooltip-menu-templates.enums';
import { TooltipMenuBase } from '../../models/tooltip-menu-base';
import { TooltipMenuSettings } from '../../models/tooltip-menu-settings';
import { TooltipMenuOptions } from './../../models/tooltip-menu-option';

@Component({
	selector: 'app-tooltip-menu',
	templateUrl: './tooltip-menu.component.html',
	styleUrls: [ './tooltip-menu.component.scss' ]
})
export class ToolMenuComponent extends TooltipMenuBase implements OnInit {
	public static readonly tooltipMenuSettingsDefault: TooltipMenuSettings = {
		templateType: TooltipTemplates.Default,
		title: '',
		widthText: '',
		text: '',
		currentView: '',
		navigatorState: '',
		hasNavigator: false,
		container: '',
		placement: '',
		iconFilter: '',
		iconAction: '',
		iconNav: '',
		disableGlobalAlignment: false
	};

	private _toolMenuParams: TooltipMenuSettings;
	@Input()
	public set toolMenuParams(tooltipMenuParams: TooltipMenuSettings) {
		this._toolMenuParams = { ...ToolMenuComponent.tooltipMenuSettingsDefault, ...tooltipMenuParams };
	}

	public get toolMenuParams() {
		return this._toolMenuParams;
	}

	public tooltipTemplates = TooltipTemplates;
	public options: TooltipMenuOptions[];
	public tooltipLabels: string[] = [];

	public currentTemplate(template: TooltipTemplates): boolean {
		return this.toolMenuParams.templateType === template;
	}

	public navCurrentView(check: string): boolean {
		const result = typeof this.toolMenuParams.isChecked === 'function' && this.toolMenuParams.isChecked(check);
		return result;
	}

	private menuSetup() {
		if (typeof this.toolMenuParams.dynamicOptions === 'function') {
			this.options = this.toolMenuParams.dynamicOptions();
			this.tooltipLabels = [];
			this.options.forEach(o => {
				this.tooltipLabels.push(o.label);
			});
		}
	}

	constructor() {
		super();
	}

	public ngOnInit() {
		this.menuSetup();
	}

	public onActionButtonClick(e: MouseEvent) {
		e.preventDefault();
		e.stopImmediatePropagation();

		// if (typeof this.toolbarMenuParams.dynamicOptions === 'function') {
		// 	this.options = this.toolbarMenuParams.dynamicOptions();
		// }

		// Allows for change detection to update values
		// if (!this.tooltip.isOpen) {
		// 	if (!this.toolbarMenuParams.disableGlobalAlignment) {
		// 		this.tooltipMenuService.checkBounds(e.clientX, e.clientY, this.tooltip);
		// 	}
		// 	setTimeout(() => {
		// 		if (this.toolbarMenuParams) {
		// 			this.tooltip.show();
		// 		}
		// 	});
		// }
		this.tooltip.show();
	}

	public get displayText(): string {
		if (typeof this.toolMenuParams.dynamicText === 'function') {
			return this.toolMenuParams.dynamicText();
		}
		return this.toolMenuParams.text;
	}
}
