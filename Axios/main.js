//AXIOS GLOBAL 
axios.defaults.headers.common['X-Auth-Token'] = 'hey'



// GET REQUEST
function getTodos() {
    // axios({
    //     method:'get',
    //     url:'https://jsonplaceholder.typicode.com/todos',
    //     params:{
    //         _limit:5
    //     }
    // })
    // .then(res=>showOutput(res))
    // .catch(err=>showOutput(err))


    // axios.get('https://jsonplaceholder.typicode.com/todos',{params:{_limit:5}})

    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => showOutput(res))
        .catch(err => showOutput(err))
}

// POST REQUEST
function addTodo() {
    //     axios({
    //             method:'post',
    //             url:'https://jsonplaceholder.typicode.com/todos',
    //             data:{
    //                 title:'new todo',
    //                 completed:'false'
    //             }
    //         })
    //         .then(res=>showOutput(res))
    //         .catch(err=>showOutput(err))
    //   }

    axios.post('https://jsonplaceholder.typicode.com/todos',
        {
            title: 'new todo',
            completed: 'false'
        })
        .then(res => showOutput(res))
        .catch(err => showOutput(err))
}
// PUT/PATCH REQUEST
function updateTodo() {
    //put -replaces ths data completely
    //patch -does not replace the whole data only modifies 
    axios.put('https://jsonplaceholder.typicode.com/todos/1',
        {
            title: 'new todo',
            completed: 'false',
            job: 'yes'
        })
        .then(res => showOutput(res))
        .catch(err => showOutput(err))

    //    axios.patch('https://jsonplaceholder.typicode.com/todos/1',
    //   {title:'new todo',
    //     completed:'false', //in this case we only modified title and 
    //    })                  //completed fields all other fields remain 
    //    .then(res=>showOutput(res))                          //intact
    //    .catch(err=>showOutput(err))
}

// DELETE REQUEST
function removeTodo() {
    axios
        .delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => showOutput(res))
        .catch(err => showOutput(err))
}

// SIMULTANEOUS DATA
function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
        .then(axios.spread((todo, post) => {
            showOutput(post)
        }))
        .catch(err => console.log)
    //    .then(res=>{
    //     console.log(res[0]);
    //     console.log(res[1]);
    //     showOutput(res[0]);
    //     // showOutput(res[1]);
    //   })


    //  .then(([todo,post])=>{
    //     console.log(todo);
    //     console.log(post);
    //     showOutput(todo);
    //     // showOutput(res[1]);
    //   })


}

// CUSTOM HEADERS
function customHeaders() {

    const config = {
        headers: {
            'Content-Type': 'application/JSON',
            Authorization: 'sometoken'
        }
    }

    axios.post('https://jsonplaceholder.typicode.com/todos',
        {
            title: 'new todo',
            completed: 'false'
        }, config)
        .then(res => showOutput(res))
        .catch(err => showOutput(err))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
    const options = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos',


        transformResponse: axios.defaults.transformResponse.concat(data => {
            for (let i = 0; i < data.length; i++) {
                data[i].title = data[i].title.toUpperCase();
            }
            console.log(data)
            return data;
        })

        // transformResponse:[(data)=>{
        // console.log(typeof data);
        // return data;
        // }]
    }
    axios(options).then(res => showOutput(res))
}

//   function transformResponse() {
//     const options={
//             method:'get',
//             url:'https://jsonplaceholder.typicode.com/todos?_limit=5',

//             transformResponse:[(data)=>{
//                 let p=JSON.parse(data)

//                 for(let i=0;i<p.length;i++){
//                    p[i].title=p[i].title.toUpperCase();
//                    p[i].Classname='Sharpener';
//                 }

//                 return p}]
//             }
//             axios(options).then(res=>showOutput(res))
//   }
// ERROR HANDLING
function errorHandling() {
    axios
        .get('https://jsonplaceholder.typicode.com/todoss')
        .then(res => showOutput(res))
        .catch(err => {
            if (err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            }
            if (err.response.status == 404) {
                alert("ERROR:PAGE NOT FOUND")
            }
            else if (err.request) {
                //request was made but no response
                console.log(err.request)
            }
            else {
                console.log(err.message)
            }
        })
}
var count = 3;
// CANCEL TOKEN
let c = document.getElementById('cancel')
c.className = "btn btn-success my-2"
c.appendChild(document.createTextNode("Attempts:3"))

function cancelToken() {
    count--;
    let c = document.getElementById('cancel')


    c.innerHTML = `RECORDINGS (Attempts:${count})`
    const source = axios.CancelToken.source();


    axios
        .get('https://jsonplaceholder.typicode.com/todos', {
            cancelToken: source.token
        }).then(res => showOutput(res))
        .catch(thrown => {
            if (axios.isCancel(thrown)) {
                console.log('request cancel', thrown.message)
            }
        })
    // count++;

    if (count == 1) {
        c.className = "btn btn-danger my-2"

    }
    if (count == 0) {
        c.className = "btn btn-secondary my-2"
        c.innerHTML = "RECORDINGS"

    }
    if (count < 0) {
        c.className = "btn btn-secondary my-2"
        c.innerHTML = "RECORDINGS"
        source.cancel('request cancelled')
        alert('you have exhausted all your attempts')
    }

}

// INTERCEPTING REQUESTS & RESPONSES
// axios.interceptors.request.use((config)=>{
//     console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()}`)
//     return config;
// },(error)=>{
//     return Promise.reject(error)
// }
// )

// axios.interceptors.request.use((config)=>{
//     config.method='delete'
//    config.url='https://jsonplaceholder.typicode.com/posts/1'
//     return config;
// },(error)=>{
//     return Promise.reject(error)
// }
// )



// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);