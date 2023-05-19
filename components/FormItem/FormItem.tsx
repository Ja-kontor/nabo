import styles from './FormItem.module.scss';

interface FormItemProps {
  name?: string;
  onFieldChange: () => void;
  value?: string;
  label?: string;
  helper?: string;
}

export default function FormItem({
  name,
  onFieldChange,
  value,
  label,
  helper,
}: FormItemProps) {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label ? label : name}
      </label>
      <input
        type='text'
        name={name}
        id={name}
        value={value}
        onChange={onFieldChange}
        className={styles.input}
      />
      {helper && <p className={styles.helper}>{helper}</p>}
    </div>
  );
}
