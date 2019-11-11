const hyphenize = text => text.toLowerCase().replace(/ /g, '-');

const demoTasks = {
  inbox: [
    {
      id: () => hyphenize(this.text),
      text: 'Remember not to forget',
      completed: false,
      notes: '',
    },
    {
      id: () => hyphenize(this.text),
      text: 'Forget not to remember',
      completed: false,
      notes: '',
    },
    {
      id: () => hyphenize(this.text),
      text: 'Buy gold',
      completed: false,
      notes: '',
    },
  ],

  next: [
    {
      id: () => hyphenize(this.text),
      text: 'Reach these kids',
      completed: false,
      notes: 'This is an extra note',
    },
    {
      id: () => hyphenize(this.text),
      text: 'Buy golden apples',
      completed: false,
      notes: '',
    },
    {
      id: () => hyphenize(this.text),
      text: 'Walk dog',
      completed: false,
      notes: '',
    },
  ],

  waiting: [
    {
      id: () => hyphenize(this.text),
      text: 'Car repair',
      completed: false,
      notes: '',
    },
  ],

  scheduled: [
    {
      id: () => hyphenize(this.text),
      text: 'Doctor checkup',
      completed: false,
      notes: '',
    },
  ],

  someday: [
    {
      id: () => hyphenize(this.text),
      text: 'Climb Everest',
      completed: false,
      notes: '',
    },
  ],

  today: [
    {
      id: () => hyphenize(this.text),
      text: 'Buy groceries',
      completed: false,
      notes: '',
    },
  ],
};

export default demoTasks;
