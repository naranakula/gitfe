(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{354:function(n,t,e){"use strict";e.r(t);var o=e(40),s=Object(o.a)({},function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('import React, { useState, useEffect } from "react";\nimport ReactDOM from "react-dom";\nimport "./styles.css";\n\nconst CounterHook = () => {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState("heaven");\n\n  useEffect(() => {\n    document.title = `counterWithHook ${count}`;\n  }, [count]);\n\n  useEffect(() => {\n    console.log("you name is", name);\n  }, [name]);\n\n  return (\n    <div>\n      <h3>Counter with Hook</h3>\n      <p>You click {count} times</p>\n      <button onClick={e => setCount(count => count + 1)}>Click me</button>\n      <p>\n        <input placeholder="输入姓名" onChange={e => setName(e.target.value)} />\n        <br />\n        your name is {name}\n      </p>\n    </div>\n  );\n};\n\nclass CounterClass extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      count: 0\n    };\n  }\n\n  setCount = () => {\n    this.setState(prevState => ({\n      count: prevState.count + 1\n    }));\n  };\n\n  render() {\n    const { count } = this.state;\n    return (\n      <div>\n        <h3>Counter with Class</h3>\n        <p>You click {count} times</p>\n        <button onClick={this.setCount}>Click me</button>\n      </div>\n    );\n  }\n}\n\nfunction App() {\n  return (\n    <div className="App">\n      <CounterHook />\n      <hr />\n      <CounterClass />\n    </div>\n  );\n}\n\nconst rootElement = document.getElementById("root");\nReactDOM.render(<App />, rootElement);\n\n')])])])])},[],!1,null,null,null);t.default=s.exports}}]);