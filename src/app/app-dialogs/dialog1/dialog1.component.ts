import { Component, OnInit } from '@angular/core';
import { Dialog } from 'src/app/shared-dialogs/models/dialog';
import { DialogService } from 'src/app/shared-dialogs/services/dialog.service';
import { Dialog1Model } from './../../models/dialog1Model';

@Component({
	selector: 'app-dialog1',
	templateUrl: './dialog1.component.html',
	styleUrls: [ './dialog1.component.scss' ]
})
export class Dialog1Component extends Dialog<Dialog1Model> implements OnInit {
	constructor(
		dialogService: DialogService
		// private readonly log: LoggingService,
		// private readonly noty: NotyService
	) {
		super(dialogService, Dialog1Model);
	}

	public ngOnInit() {}

	public show(): void {
		this.formData.level++;
	}

	public openDialog1(): boolean {
		this.dialogService.open('app-dialog1', this.formData).then(
			saved => {
				// this.log.info(`Saved DIALOG1 from DIALOG1`, saved);
			},
			err => {
				// if (err)
				// 	this.log.error(`Error DIALOG1 from DIALOG1`, err);
				// else
				// 	this.log.warn(`Closed DIALOG1 from DIALOG1`);
			}
		);

		return false;
	}

	public openDialog2(): boolean {
		this.dialogService.open('app-as-dialog2', this.formData).then(
			saved => {
				// this.log.info(`Saved DIALOG2 from DIALOG1`, saved);
			},
			err => {
				// if (err)
				// 	this.log.error(`Error DIALOG2 from DIALOG1`, err);
				// else
				// 	this.log.warn(`Closed DIALOG2 from DIALOG1`);
			}
		);

		return false;
	}

	public openDialog3(): boolean {
		this.dialogService.open('app-as-dialog3', this.formData).then(
			saved => {
				// this.log.info(`Saved DIALOG3 from DIALOG1`, saved);
			},
			err => {
				// if (err)
				// 	this.log.error(`Error DIALOG3 from DIALOG1`, err);
				// else
				// 	this.log.warn(`Closed DIALOG3 from DIALOG1`);
			}
		);

		return false;
	}

	public openDisableClose(): boolean {
		this.dialogService.open('app-as-dialog-disable-close', this.formData).then(
			saved => {
				// this.log.info(`Saved DIALOGDisableClose from DIALOG1`, saved);
			},
			err => {
				// if (err) this.log.error(`Error DIALOGDisableClose from DIALOG1`, err);
				// else this.log.warn(`Closed DIALOGDisableClose from DIALOG1`);
			}
		);

		return false;
	}

	public openDialogCenter(): boolean {
		this.dialogService.open('app-dialog-center1', this.formData).then(
			saved => {
				// this.log.info(`Saved DIALOG-CENTER from DIALOG1`, saved);
			},
			err => {
				// if (err)
				// 	this.log.error(`Error DIALOG-CENTER from DIALOG1`, err);
				// else
				// 	this.log.warn(`Closed DIALOG-CENTER from DIALOG1`);
			}
		);

		return false;
	}

	public save(): boolean {
		this.close(true);
		return false;
	}

	public openNoty(): boolean {
		// this.noty.open('test', NotyTypes.Success);
		return false;
	}
}
