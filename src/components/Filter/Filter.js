import { PropTypes, Container, Label, Input } from 'common';
import { ClearFilterButton } from 'common/components/Button';

export const Filter = ({ value, onChangeFilter, onClearFilter }) => (
  <>
    <Container>
      <Label label="Find contact by name" htmlFor="filter" />
    </Container>
    <Container>
      <div style={{ display: 'flex', gap: 12 }}>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={onChangeFilter}
        />
        <ClearFilterButton display="if" onClick={onClearFilter}>
          Clear filter
        </ClearFilterButton>
      </div>
    </Container>
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired,
};
