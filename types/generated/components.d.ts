import type { Schema, Struct } from '@strapi/strapi';

export interface BlacksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blacks_rich_texts';
  info: {
    displayName: 'RichText';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface BlacksSpoiler extends Struct.ComponentSchema {
  collectionName: 'components_blacks_spoilers';
  info: {
    displayName: 'Spoiler';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlacksTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_blacks_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quote: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blacks.rich-text': BlacksRichText;
      'blacks.spoiler': BlacksSpoiler;
      'blacks.testimonial': BlacksTestimonial;
    }
  }
}
