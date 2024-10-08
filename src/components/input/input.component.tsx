import React, { ReactElement } from 'react';

import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onChange: (value: any) => void;
  error?: boolean;
}

const Input = ({ className, error, onChange, ...rest }: Props): ReactElement => {
  return (
    <input
      className={`${styles.input} ${error && styles.error} ${className}`}
      {...rest}
      onChange={(e) => onChange(e.target.value)}></input>
  );
};

export default Input;
