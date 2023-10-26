# Login Page

Frontend live code test by Eraspace.

## Requirements

Complete the missing codes at the files below:
- app/pages/login/page.tsx
- app/components/views/LoginForm.tsx

For the appearance of the login page, it would be preferable if you can create it as similar as public/mockups.

For functionality of the login page, it must consist:

- Email Validations:
  - This field only accepts valid email format. 
    - Error Message: `Format Email tidak valid`
    - Cases:
      - `eraspace` -> (invalid)
      - `eraspace@` -> (invalid)
      - `@email.com` -> (invalid)
      - `eraspace@email.` -> (invalid)
      - `eraspace@email.com` -> (valid)

- Password Validation:
  - This field only accepts 6 or more characters.
    - Error Message: `Password harus terdiri dari minimal 6 karakter`
    - Cases: 
      - `pass` -> (invalid)
      - `password` -> (valid)
  - This field needs to be masked

- When all validation passed, hide the error message

To submit the code, please create new branch with format name `{year}-{month}-{day}-{hour}-{your-name}`

PS: Please make the code simple, readable & maintainable for other developers :D

## Tech Stack

**Client:** React, NextJS, TailwindCSS, Typescript
