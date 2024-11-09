import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Reel
 *
 * Reels de vídeo do Vimeo
 */
export interface Reel extends SanityDocument {
  _type: "reel";

  /**
   * Vimeo Link — `string`
   *
   *
   */
  video?: string;

  /**
   * Ano — `number`
   *
   *
   */
  year?: number;
}

/**
 * Direção de fotografia
 *
 *
 */
export interface Cinematography extends SanityDocument {
  _type: "cinematography";

  /**
   * Título — `string`
   *
   *
   */
  title?: string;

  /**
   * Descrição — `text`
   *
   *
   */
  description?: string;

  /**
   * Ordem — `number`
   *
   * Em qual ordem aparece na lista de trabalhos
   */
  order?: number;

  /**
   * Imagem de capa — `image`
   *
   *
   */
  header?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Galeria — `array`
   *
   *
   */
  gallery?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;
}

/**
 * Operação de câmera
 *
 *
 */
export interface Camera extends SanityDocument {
  _type: "camera";

  /**
   * Título — `string`
   *
   *
   */
  title?: string;

  /**
   * Descrição — `text`
   *
   *
   */
  description?: string;

  /**
   * Ordem — `number`
   *
   * Em qual ordem aparece na lista de trabalhos
   */
  order?: number;

  /**
   * Pôster — `image`
   *
   *
   */
  poster?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Página — `reference`
   *
   *
   */
  page?: SanityReference<Cinematography>;
}

/**
 * Bio
 *
 *
 */
export interface Bio extends SanityDocument {
  _type: "bio";

  /**
   * Nome — `string`
   *
   *
   */
  name?: string;

  /**
   * PT — `text`
   *
   *
   */
  pt?: string;

  /**
   * ES — `text`
   *
   *
   */
  es?: string;

  /**
   * Imagem — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Contacto
 *
 *
 */
export interface Contact extends SanityDocument {
  _type: "contact";

  /**
   * Nome — `string`
   *
   *
   */
  name?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Telefone — `string`
   *
   *
   */
  phone?: string;

  /**
   * Instagram — `string`
   *
   *
   */
  instagram?: string;

  /**
   * Linkedin — `string`
   *
   *
   */
  linkedin?: string;

  /**
   * Vimeo — `string`
   *
   *
   */
  vimeo?: string;

  /**
   * IMDb — `string`
   *
   *
   */
  imdb?: string;

  /**
   * ABCine — `string`
   *
   *
   */
  abcine?: string;
}

export type Documents = Reel | Cinematography | Camera | Bio | Contact;
