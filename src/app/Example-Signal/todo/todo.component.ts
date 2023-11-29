import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  private taskString = signal('');
  private tasks: WritableSignal<string[]> = signal([]);

  addTask(event: Event) {
    event.preventDefault();
    if (this.taskString() !== '' && !this.tasks().includes(this.taskString())) {
      this.tasks.update((tasks) => [...tasks, this.taskString()]);
      this.taskString.set('');
    }
  }
  deleteTask(index: number) {
    this.tasks.update((tasks) => {
      tasks.splice(index, 1);
      return tasks;
    });
  }
  search(event: Event) {
    this.taskString.set((event.target as HTMLInputElement).value);
  }
  filteredTasks = computed(() =>
    this.tasks().filter((task) => task.includes(this.taskString())));

  timedTask() {
    setTimeout(() => {
      this.taskString.set('Waiting for user to type...');
    }, 3000);
  }

}
