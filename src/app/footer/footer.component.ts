import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerCategories: Array<IFooterCategory> = [
    {
      category: 'Company',
      pages: [
        {
          title: 'About',
          url: '#/about'
        },
        {
          title: 'Contact Us',
          url: '#/contact-us'
        },
        {
          title: 'Careers',
          url: '#/careers'
        }
      ]
    },
    {
      category: 'Account',
      pages: [
        {
          title: 'Log In',
          url: '#/log-in'
        },
        {
          title: 'Create Account',
          url: '#/create-account'
        }
      ]
    },
    {
      category: 'Support',
      pages: [
        {
          title: 'Help Center',
          url: '#/help-center'
        },
        {
          title: 'Accessibility',
          url: '#/accessibility'
        }
      ]
    }
  ];

  public footerSocialMedias: Array<IFooterSocialMedia> = [
    {
      title: 'YouTube',
      imageUrl: 'assets/images/icons/youtube.png',
      url: '#/youtube'
    },
    {
      title: 'Pinterest',
      imageUrl: 'assets/images/icons/pinterest.png',
      url: '#/pinterest'
    },
    {
      title: 'Facebook',
      imageUrl: 'assets/images/icons/facebook.png',
      url: '#/facebook'
    },
    {
      title: 'Twitter',
      imageUrl: 'assets/images/icons/twitter.png',
      url: '#/twitter'
    },
    {
      title: 'Instagram',
      imageUrl: 'assets/images/icons/instagram.png',
      url: '#/instagram'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface IFooterCategory {
  category: string,
  pages?: Array<{title: string, url: string}>
}

export interface IFooterSocialMedia {
  title: string,
  imageUrl: string,
  url: string
}
