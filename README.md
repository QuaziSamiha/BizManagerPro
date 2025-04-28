# LAAN POS USA

## SAAS Module Starting Date:

- 23 Jan, 25 to 30 Jan, 25
- 11 Feb, 25 to --------

## Tentative Deadline:

- 25 Feb, 25

### Figma Links

- **SAAS Module:** (https://www.figma.com/design/yAK9sB8NU9b1srolEgpLh7/Laan-POS?node-id=3452-30174&p=f&t=JDogsHwdwRGwlCUJ-0)

- **Back Office:** (https://www.figma.com/design/yAK9sB8NU9b1srolEgpLh7/Laan-POS?node-id=984-25258&p=f&t=JDogsHwdwRGwlCUJ-0)

- **Seller Site** (https://www.figma.com/design/yAK9sB8NU9b1srolEgpLh7/Laan-POS?node-id=543-12546&p=f&t=JDogsHwdwRGwlCUJ-0)

- **Website** (https://www.figma.com/design/yAK9sB8NU9b1srolEgpLh7/Laan-POS?node-id=223-9650&p=f&t=JDogsHwdwRGwlCUJ-0)

- [Swagger](http://192.168.0.29:8800/webjars/swagger-ui/index.html)

### color selection

- button color - blueActual
- button hover - blueHover
- if bg blue
  - text white
  - hover text-silver
- text - white
- input label text - slate 800
- placeholder text - slate 700
- all header text - slate 700
- input field bg - stone 100

### [Date Time Range Picker](https://projects.wojtekmaj.pl/react-datetimerange-picker/)

# SAAS Module

## Miscellaneous

### Welcome Message

- [get all messages](http://192.168.0.29:8800/setup-ws/api/v1/message/get-all-message?companyId=2&userId=401&appId=4)
- show the following information from this API :
  - title
  - short description
  - delivery date (if exists)
  - send date (entry date)
  - actions (view, edit)
- `Add Message Modal Form` : Validation Rules <br><br>
  `message object properties`: required field

  - `Title Field` - required field
  - `Select Client` - required field
    - client will be mainly the companies or shop owners
    - we will send companyId to backend
    - at least one client select is mandatory, but one can select multiple clients also.
  - `Description Field` - required field
  - `isSelected Flag` 1 or 0
    - if 0, then FutureDeliveryDate will be null.
    - if 1, then FutureDeliveryDate will be mandatory.
  - `entryBy Flag` default value will be 1 (not taking from form).

  `attachment Field`: optional field

  - one can add multiple attachments.
  - format is : JPG, JPEG, PNG, and GIF.
  - size of each attachment must be within 5MB. -- `Error code: 409` if attachment will be more than 5MB.

<!-- //! FRONTEND ISSUES  -->

1. table horizontal scrollbar required

<!-- //!  BACKEND ISSUES  -->

1. welcome Message

- view message: receiverCompanies still null, so cannot show clients who will receive messages
- edit message separate API is required, same receiverCompanies issue

# Folder Structure

`src` folder:

- `helpers`
  - `axios`
