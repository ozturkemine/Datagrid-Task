import { Component } from '@angular/core';
import { SocialMedia } from 'src/app/models/social-media.model';
import { SocialMediaService } from 'src/app/services/social-media.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {

  socialMediaData: SocialMedia[] = [];

  constructor(private socialMediaService: SocialMediaService) { }

  ngOnInit(): void {
    this.socialMediaData = this.socialMediaService.getSocialMediaData();
  }

}
