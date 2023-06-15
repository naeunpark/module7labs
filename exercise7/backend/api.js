import { useState } from 'react'

let posts = [];
let postsLimit = 10;
let listeners = [];

export const postsStore = {
    addPost(data) {
        let newData = {
            userId: data.userIdid ? data.userIdid : 2,
            id: data.id ? data.id : posts.length+1,
            title: data.title,
            body: data.body,
        }
        posts = [...posts, newData]
        emitChange()
    },
    subscribe(listener) {
        listeners = [...listeners, listener];
        return()=> {
            listeners = listeners.filter(l => l !== listener)
        }
    },
    getSnapshot(){
        return posts;
    }
}

function emitChange() {
    for (let listener of listeners) {
      listener();
    }
  }

fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postsLimit}`)
  .then(response => response.json())
  .then(json => json.forEach(item=>postsStore.addPost(item)))