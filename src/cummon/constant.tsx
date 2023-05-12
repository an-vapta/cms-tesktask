//@ts-nocheck
import { Column } from './interface'

export const columns: Column[] = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'title', label: 'Title', minWidth: 100 },
  {
    id: 'published_on',
    label: 'Published ON',
    minWidth: 170,
    align: 'left',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'author',
    label: 'Authore',
    minWidth: 170,
    align: 'left',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'summary',
    label: 'Summary',
    minWidth: 170,
    align: 'left',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'content',
    label: 'Content',
    minWidth: 170,
    align: 'left',
  },
];

export const BASE_URL = "https://dc75-122-185-46-118.ngrok-free.app/api/v1"

export const apiData = [
  {
    "id": "344444",
    "type": "content",
    "attributes": {
      "id": 3,
      "title": "What is Lorem Ipsum? 2",
      "published_on": "2023-05-11T10:24:50.304Z",
      "author": null,
      "summary": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }
  },
  {
    "id": "1",
    "type": "content",
    "attributes": {
      "id": 1,
      "title": "What is Lorem Ipsum? 0",
      "published_on": "2023-05-11T10:24:50.186Z",
      "author": null,
      "summary": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }
  },
  {
    "id": "2",
    "type": "content",
    "attributes": {
      "id": 2,
      "title": "What is Lorem Ipsum? 1",
      "published_on": "2023-05-11T10:24:50.277Z",
      "author": null,
      "summary": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }
  },
  {
    "id": "5",
    "type": "content",
    "attributes": {
      "id": 5,
      "title": "What is Lorem Ipsum? 4",
      "published_on": "2023-05-11T10:24:50.337Z",
      "author": null,
      "summary": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }
  },
  {
    "id": "4",
    "type": "content",
    "attributes": {
      "id": 4,
      "title": "What is Lorem Ipsum? 3",
      "published_on": "2023-05-11T10:24:50.320Z",
      "author": null,
      "summary": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }
  },
  {
    "id": "6",
    "type": "content",
    "attributes": {
      "id": 6,
      "title": "What is Lorem Ipsum? 5",
      "published_on": "2023-05-11T10:24:50.353Z",
      "author": null,
      "summary": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }
  },
  {
    "id": "9",
    "type": "content",
    "attributes": {
      "id": 9,
      "title": "What is Lorem Ipsum? 1",
      "published_on": "2023-05-11T12:02:43.399Z",
      "author": null,
      "summary": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }
  },
  {
    "id": "8",
    "type": "content",
    "attributes": {
      "id": 8,
      "title": "What is Lorem Ipsum? 0",
      "published_on": "2023-05-11T12:02:43.314Z",
      "author": null,
      "summary": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }
  },
  {
    "id": "11",
    "type": "content",
    "attributes": {
      "id": 11,
      "title": "What is Lorem Ipsum? 3",
      "published_on": "2023-05-11T12:02:43.490Z",
      "author": null,
      "summary": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }
  },
  {
    "id": "10",
    "type": "content",
    "attributes": {
      "id": 10,
      "title": "What is Lorem Ipsum? 2",
      "published_on": "2023-05-11T12:02:43.415Z",
      "author": null,
      "summary": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }
  },
  {
    "id": "12",
    "type": "content",
    "attributes": {
      "id": 12,
      "title": "What is Lorem Ipsum? 4",
      "published_on": "2023-05-11T12:02:43.507Z",
      "author": null,
      "summary": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }
  },
  {
    "id": "13",
    "type": "content",
    "attributes": {
      "id": 13,
      "title": "What is Lorem Ipsum? 5",
      "published_on": "2023-05-11T12:02:43.524Z",
      "author": null,
      "summary": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "content": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
    }
  }
]
