# AkariUI-Bs-React (Akari UI Bootstrap React)

Akari UI is a lightweight React.js component library built with Bootstrap. It provides a set of customizable and reusable components to accelerate your development process while maintaining a consistent design system.

## Features

- **Responsive Design:** Leverages Bootstrap’s responsive grid system and utilities.
- **Customizable:** Easy to style and extend components to fit your project’s design.
- **Lightweight:** Minimal dependencies for optimized performance.
- **Ready-to-Use Components:** Includes a growing collection of common UI elements.

## Installation

Install `akariui-bs-react` via npm:

```bash
npm install @dreamcatalystventures/akariui-bs-react
```

Or with yarn:

```bash
yarn add @dreamcatalystventures/akariui-bs-react
```

## Peer Dependencies


## Usage

1. Import Bootstrap CSS in your `index.js` or `App.js` file:

   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

2. Import and use Akari UI components in your application:

   ```javascript
   import React from 'react';
   import { Button } from 'akari-ui';

   const App = () => {
     return (
       <div className="container">
         <h1>Welcome to Akari UI</h1>
         <Button variant="primary">Click Me</Button>
       </div>
     );
   };

   export default App;
   ```

## Components

### Button

A versatile button component with support for different styles and sizes.

#### Props:

- `variant` (string): Button style (e.g., `primary`, `secondary`, `success`, etc.).
- `size` (string): Button size (`sm`, `lg`).
- `disabled` (boolean): Disable the button.

#### Example:

```javascript
<Button variant="success" size="lg">Submit</Button>
```

### Card

A flexible card component for displaying content.

#### Props:

- `title` (string): Card title.
- `text` (string): Card text.
- `imgSrc` (string): Image source URL for the card.

#### Example:

```javascript
<Card
  title="Card Title"
  text="This is a simple card example."
  imgSrc="https://via.placeholder.com/150"
/>
```

### Additional Components

Check the [documentation](#) for details on all available components.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Submit a pull request with a detailed description of your changes.

## License

Akari UI is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For issues, questions, or suggestions, please open an issue in this repository or contact us at [support@akari-ui.com](mailto:support@akari-ui.com).

