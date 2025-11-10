import * as baseTheme from 'jsonresume-theme-even';
 
export function render(resume) {
  let html = baseTheme.render(resume);
 
  // Inject custom CSS
  const customCSS = `
    <style>
      body {
        overscroll-behavior: none;
      }

      @media print {
        .masthead {
          background: none;
          padding: 0;
          padding: 2rem;
          gap: 0.75rem;
        }

        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          gap: 1rem;
          grid-template-columns: [full-start] 1fr [main-start side-start] minmax(min-content, 1em) [side-end content-start] minmax(min-content, 60em) [main-end content-end] 1fr [full-end];
        }

        article {
          break-inside: avoid;
        }

        a {
          color: rgb(25, 30, 35);
        }
      }
    </style>
  </head>
  `;
 
  return html.replace('</head>', customCSS);
}
