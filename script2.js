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

const propsaq = (className, id, style) => {
    let props = {};
    props.className = className;
    props.id = id;
    props.style = style;
    for (let key in props){
        if (props[key] == undefined){
            delete props[key];
        }
    }
    return props;
}

const createEl = (tag = "div", props = { style: { color: "black" }, text: "text"}, ...children) => { //rewrite props aquisition
    const el = document.createElement(tag);
    if (typeof(tag) == "function"){
        return tag(props);
    }
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
        }
    }
    isarray(children, el);
    return el;
}

const ToDo = ({list}) => {
    return(createEl("div", "", 
        ...list.map(data => {
            createEl("todo", data)
        })
    ));
}