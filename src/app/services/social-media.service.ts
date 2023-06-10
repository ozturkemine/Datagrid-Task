import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocialMedia } from '../models/social-media.model';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
  private socialMediaData: SocialMedia[] = [
    { name: 'Twitter', description: 'Social networking and microblogging service', link: 'https://twitter.com' },
    { name: 'Facebook', description: 'Social networking platform', link: 'https://facebook.com' },
    { name: 'Instagram', description: 'Photo and video sharing social networking service', link: 'https://instagram.com' },
    { name: 'LinkedIn', description: 'Professional networking platform', link: 'https://linkedin.com' },
    { name: 'YouTube', description: 'Video sharing platform', link: 'https://youtube.com' }
    // Diğer sosyal medya verileri buraya eklenebilir
  ];

  getSocialMediaData(): SocialMedia[] {
    return this.socialMediaData;
  }
}