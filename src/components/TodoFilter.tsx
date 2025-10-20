import { FilterType } from '../types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export default function TodoFilter({ currentFilter, onFilterChange }: TodoFilterProps) {
  return (
    <div style={styles.container}>
      <button
        style={{
          ...styles.button,
          ...(currentFilter === 'all' ? styles.activeButton : {}),
        }}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        style={{
          ...styles.button,
          ...(currentFilter === 'active' ? styles.activeButton : {}),
        }}
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button
        style={{
          ...styles.button,
          ...(currentFilter === 'completed' ? styles.activeButton : {}),
        }}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    justifyContent: 'center',
  } as React.CSSProperties,
  button: {
    padding: '8px 16px',
    fontSize: '14px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    cursor: 'pointer',
    transition: 'all 0.2s',
  } as React.CSSProperties,
  activeButton: {
    backgroundColor: '#646cff',
    color: '#fff',
    borderColor: '#646cff',
  } as React.CSSProperties,
};
