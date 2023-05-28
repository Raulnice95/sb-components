import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Este es el tamaño a mostrar en la etiqueta
  */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
  * Este es el mensaje a mostrar en la etiqueta
  */
  label: string;
  /**
  * Mostrar o no mensaje en mayusculas
  */
  allCaps?: boolean;
  /**
  * Color del texto a mostrar
  */
  color?: 'primary' | 'secundary' | 'tertiary' ;
  /**
  * Color del texto a mostrar
  */
  fontColor?: string ;
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
  size = 'normal',
  label = 'No Label',
  allCaps = false,
  color = 'primary',
  fontColor
}: MyLabelProps) => {
  return (
    <span 
      className={ `label ${ size } text-${color}`}
      style={{color: fontColor}}
    >
      { (allCaps) ? label.toUpperCase() : label }
    </span>
  )
}

