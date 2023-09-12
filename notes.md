https://feathersjs.com/guides/basics/login.html
e8c49517da48745d2213
515ea010126b5f45d5bec23b44d0f5940031264e

http://localhost:3030/#access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2OTQ1NTY2NTUsImV4cCI6MTY5NDY0MzA1NSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsInN1YiI6IjIiLCJqdGkiOiI5NDZkZTFkNC0yODAyLTRhZTgtOGY5YS1iNmRhNjdjMGNhMmQifQ.ATiAwJNVuWehQQkkbFeWylCIgW9pyearx0eVYWv1K1o

curl 'http://localhost:3030/messages/' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2OTQ1NTY2NTUsImV4cCI6MTY5NDY0MzA1NSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsInN1YiI6IjIiLCJqdGkiOiI5NDZkZTFkNC0yODAyLTRhZTgtOGY5YS1iNmRhNjdjMGNhMmQifQ.ATiAwJNVuWehQQkkbFeWylCIgW9pyearx0eVYWv1K1o' \
  --data-binary '{ "text": "Hello 2 from the console" }'

  NEXT: https://feathersjs.com/guides/frontend/javascript.html

  git clone git@github.com:brentgroves/fchat.git