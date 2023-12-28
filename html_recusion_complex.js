const content = [
  {
    tag: "section",
    content: "",
    className: "img",
    id: "header",
    child: [
      {
        tag: "img",
        content: "",
        className: "",
        alt: "#",
        src: "#",
      },
      {
        tag: "img",
        content: "",
        className: "",
        alt: "#",
        src: "#",
      },
      {
        tag: "img",
        content: "",
        className: "",
        alt: "#",
        src: "#",
      },
      {
        tag: "img",
        content: "",
        className: "",
        alt: "#",
        src: "#",
      },
      {
        tag: "img",
        content: "",
        className: "",
        alt: "#",
        src: "#",
      },
    ],
  },
  {
    tag: "header",
    content: "",
    className: "intro",
    id: "header",
    child: {
      tag: "h1",
      content: "AQIB FAISAL SHABIR",
      className: "h1",
    },
  },
  {
    tag: "div",
    content: "",
    className: "container-aside",
    id: "main",
    child: {
      tag: "aside",
      content: "",
      className: "",
      child: {
        tag: "section",
        content: "",
        className: "contact-item",
        child: {
          tag: "h3",
          content: "CONTACT",
          className: "contact",
        },
      },
    },
  },
  {
    tag: "div",
    content: "",
    className: "container-main-content",
    id: "main",
    child: {
      tag: "main",
      content: "",
      className: "",
      child: {
        tag: "section",
        content: "",
        className: "experience",
      },
    },
  },
  {
    tag: "footer",
    content: "",
    className: "",
    id: "footer",
    child: {
      tag: "a",
      content: "Any Buisness enquiries? Click here to get in touch",
      className: "footer",
    },
  },
];

function traverse(node, parent) {
  const domNode = document.createElement(node.tag);

  for (const key in node) {
    switch (key) {
      case "content":
        domNode.innerText = node.content;
        break;
      case "className":
        domNode.classList.add = node.class;
        break;
      case "id":
        domNode.id = node.id;
        break;
      default:
        break;
    }
  }
  parent.append(domNode);
  if (node.child) {
    if (Array.isArray(node.child)) {
      node.child.forEach((sibling) => {
        traverse(sibling, domNode);
      });
    } else {
      traverse(node.child, domNode);
    }
  }
  return domNode;
}

content.forEach((node) => {
  const domNode = traverse(node, document.getElementById("root"));
});
