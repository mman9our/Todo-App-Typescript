import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from './Taskcard';

const mockTask = {
  id: '1',
  title: 'Example Task',
  isDone: false,
};

describe('TaskCard component', () => {

it('calls the onToggleDone function when the done button is clicked', () => {
    const mockOnToggleDone = jest.fn();
    render(<TaskCard task={mockTask} onToggleDone={mockOnToggleDone} />);

    const doneButton = screen.getByText('done');
    fireEvent.click(doneButton);

    expect(mockOnToggleDone).toHaveBeenCalledTimes(1);
    expect(mockOnToggleDone).toHaveBeenCalledWith({ ...mockTask, isDone: true });
});

});
