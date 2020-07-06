const isarray = (arr,el) => {
    for (let item in arr){
        if(arr[item] instanceof Array){
            const newarr = arr[item];
            isarray(newarr);
        } else {
            el.appendChild(arr[item]);
        }
    }
}

// const propsaq = (...kids) => {
//     let props = {};
//     props.className = className;
//     props.id = id;
//     props.style = style;
//     for (let key in props){
//         if (props[key] == undefined){
//             delete props[key];
//         }
//     }
//     return props;
// }

const createEl = (tag = "div", props = { style: { color: "black" }, text: "text"}
, ...children) => { //rewrite props aquisition
    if (typeof(tag) == "function"){
        return tag(props);
    }
    const el = document.createElement(tag);
    for (let key in props){
        if(key == "className") {
            el.setAttribute("class",props[key]);
        } else if (key == "id") {
            el.setAttribute("id",props[key])
        }  else if (key == "text") {
            el.innerHTML = props[key];
        } else if (key == "style"){
                if (typeof(props[key]) == "object"){
                    const stylesheet = props[key];
                    for (let style in stylesheet){
                        el.style[style] = stylesheet[style];
                    }} else {
                        el.setAttribute("style",props[key])
            }
        } else {
            el.setAttribute(key, props[key]);
        }
    }
    for (let smol in children){
        
    }
    return el;
}

const ToDo = ({list}) => {
    const temp = (createEl("div", {className : "border", style : "color: red;"}, 
            ...list.map(data => {
                createEl("todo", data);
            })
        ));
    for (let item in list){
        temp.appendChild(createEl("todo", list[item]));
    }

    temp.appendChild(createEl("button",{text : "salam", onclick: `palundra()`}));
    return temp;
};

const palundra = () => {
    alert("salam!");
}


// console.log(
//     document.body.append(createEl(
//         ToDo, 
//         {
//             list: [
//                 {
//                     id: "i3",
//                     text: "Abc"
//                 },
//                 {
//                     id: "i4",
//                     text: "<h3>cba</h3>"
//                 }
//             ]
//         }
// ))
// )

const createT = () => {
    document.body.append(createEl(
        ToDo, 
        {
            list: [
                {
                    id: "i4",
                    text: `<h3>${document.getElementById("sub").value}</h3>`
                }
            ]
        }
))
}