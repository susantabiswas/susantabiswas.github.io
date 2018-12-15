import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-certificates',
	templateUrl: './certificates.component.html',
	styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		// scroll to the top of the page when the component loads
		window.scroll(0, 0);
	}

}
