function singleCard({
  logo,
  company,
  postedAt,
  location,
  website,
  requirements,
  position,
  description,
  contract,
  id,
  logoBackground,
  role,
}) {
  const advertisment = createNode(
    {
      id,
      tag: 'div',
      classList: ['advertisment'],
    },
    document.querySelector('body')
  );
  createNode(
    {
      tag: 'img',
      src: logo,
      classList: ['logos'],
      backgroundColor: logoBackground,
    },
    advertisment
  );

  const advertismentHeader = createNode(
    {
      tag: 'div',
      classList: ['advertismentHeader'],
    },
    advertisment
  );

  const companyData = createNode(
    {
      tag: 'div',
      classList: ['companyData'],
    },
    advertismentHeader
  );

  createNode(
    {
      tag: 'h3',
      textContent: company,
    },
    companyData
  );

  createNode(
    {
      tag: 'p',
      textContent: website,
    },
    companyData
  );

  createNode(
    {
      tag: 'button',
      classList: ['company'],
      textContent: 'Company Site',
    },
    advertisment
  );

  const contentsss = createNode(
    {
      tag: 'div',
      classList: ['content'],
    },
    document.querySelector('body')
  );

  const contentHeader = createNode(
    {
      tag: 'div',
      classList: ['contentHeader'],
    },
    contentsss
  );

  const contentData = createNode(
    {
      tag: 'div',
      classList: ['contentData'],
    },
    contentHeader
  );

  const time = createNode(
    {
      tag: 'div',
      classList: ['time'],
    },
    contentData
  );

  createNode(
    {
      tag: 'p',
      textContent: postedAt,
    },
    time
  );

  createNode(
    {
      tag: 'p',
      textContent: contract,
    },
    time
  );

  createNode(
    {
      tag: 'h5',
      textContent: position,
    },
    contentData
  );

  createNode(
    {
      tag: 'p',
      textContent: location,
      classList: ['location'],
    },
    contentData
  );

  createNode(
    {
      tag: 'button',
      classList: ['content', 'button'],
      textContent: 'Apply Now',
    },
    contentHeader
  );

  createNode(
    {
      tag: 'p',
      textContent: description,
      classList: ['description'],
    },
    contentsss
  );

  createNode(
    {
      tag: 'h3',
      textContent: 'Requirements',
    },
    contentsss
  );

  createNode(
    {
      tag: 'p',
      textContent: requirements.content,
      classList: ['contents'],
    },
    contentsss
  );

  const ul = createNode({ tag: 'ul' }, contentsss);

  requirements.items.forEach((item) => {
    createNode({ tag: 'li', textContent: item }, ul);
  });

  createNode(
    {
      tag: 'h3',
      textContent: 'What Will You Do',
    },
    contentsss
  );

  createNode(
    {
      tag: 'p',
      textContent: role.content,
      classList: ['role'],
    },
    contentsss
  );

  const ol = createNode({ tag: 'ol' }, contentsss);

  requirements.items.forEach((item) => {
    createNode({ tag: 'li', textContent: item }, ol);
  });

  const footer = createNode({
    tag: 'div',
    classList: ['footer'],
  });

  const footerData = createNode(
    {
      tag: 'div',
      classList: ['footerData'],
    },
    footer
  );

  createNode(
    {
      tag: 'h5',
      textContent: 'Senior Software Engineer',
    },
    footerData
  );

  createNode(
    {
      tag: 'p',
      textContent: 'So Digital Inc',
    },
    footerData
  );

  createNode(
    {
      tag: 'button',
      textContent: 'Apply Now',
      classList: ['footerbutton'],
    },
    footer
  );
}
