https://feathersjs.com/guides/basics/login.html
# register a user
curl 'http://localhost:3030/users/' \
  -H 'Content-Type: application/json' \
  --data-binary '{ "email": "moto@feathersjs.com", "password": "supersecret" }'

# login as local user
curl 'http://localhost:3030/authentication/' \
  -H 'Content-Type: application/json' \
  --data-binary '{ "strategy": "local", "email": "moto@feathersjs.com", "password": "supersecret" }'

{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2OTQ2NDM3NTIsImV4cCI6MTY5NDczMDE1MiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsInN1YiI6IjMiLCJqdGkiOiJjOWZmM2JlYi05MmM3LTQ5YjItOGY2ZS1mNmUzNzVkOWM0OTAifQ.x-Kdd3Wcvo0XY0PAF-nIWtRuaPF5AsgtKPNFFWgpmSU","authentication":{"strategy":"local","payload":{"iat":1694643752,"exp":1694730152,"aud":"https://yourdomain.com","sub":"3","jti":"c9ff3beb-92c7-49b2-8f6e-f6e375d9c490"}},"user":{"id":3,"email":"moto@feathersjs.com","githubId":null,"avatar":"https://s.gravatar.com/avatar/91a9872ed178009abfc94cbda31f45bb?s=60","microsoftId":null}}%  


# create a new message
curl 'http://localhost:3030/messages/' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2OTQ2NDM3NTIsImV4cCI6MTY5NDczMDE1MiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsInN1YiI6IjMiLCJqdGkiOiJjOWZmM2JlYi05MmM3LTQ5YjItOGY2ZS1mNmUzNzVkOWM0OTAifQ.x-Kdd3Wcvo0XY0PAF-nIWtRuaPF5AsgtKPNFFWgpmSU' \
  --data-binary '{ "text": "Hello 5 from the console" }'

# Create GitHub OAuth app
To allow login with GitHub, we first have to create a new OAuth application on GitHub. You can put anything in the name, homepage and description fields. The callback URL must be set to
http://localhost:3030/oauth/github/callback

# login to GitHub
http://localhost:3030/oauth/github
# login to microsoft
http://localhost:3030/oauth/microsoft

https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=29fa39d4-de57-4009-a46a-c561fa048562&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3030%2Foauth%2Fmicrosoft%2Fcallback&scope=openid

e8c49517da48745d2213
515ea010126b5f45d5bec23b44d0f5940031264e

http://localhost:3030/#access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2OTQ2Mzk4NDgsImV4cCI6MTY5NDcyNjI0OCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsInN1YiI6IjIiLCJqdGkiOiIzZDc1OWE2Yy1lOWU4LTQzNzEtYjExYS0yNzhhOGYyMGFmYzAifQ.yKnWt7Xucr3WKeTyrYyr2HUBZQylnJgGbCyzBEwbeZ4

curl 'http://localhost:3030/messages/' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2OTQ2Mzk4NDgsImV4cCI6MTY5NDcyNjI0OCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsInN1YiI6IjIiLCJqdGkiOiIzZDc1OWE2Yy1lOWU4LTQzNzEtYjExYS0yNzhhOGYyMGFmYzAifQ.yKnWt7Xucr3WKeTyrYyr2HUBZQylnJgGbCyzBEwbeZ4' \
  --data-binary '{ "text": "Hello 4 from the console" }'

  NEXT: https://feathersjs.com/guides/frontend/javascript.html
  https://feathersjs.com/guides/frameworks.html

https://feathersjs.com/api/client.html#typed-client
https://feathersjs.com/guides/cli/client.html

A Feathers application generated with Feathers v5 or later now exports a client file, including the types you defined in schemas on the server. For more information see the CLI guide

cd src
  git clone git@github.com:brentgroves/fchat.git feathers-chat

from reports-feathers
      "oauth": {
      "redirect": "http://localhost:3000/",
      "microsoft": {
        "key": "29fa39d4-de57-4009-a46a-c561fa048562",
        "secret": "QFf8Q~W2W5VjfCYep6lw6pItIBzt7r8nVbyJxbeE",
        "scope": [
          "openid"
        ]
        
      }
    }

https://www.freecodecamp.org/news/using-typescript-in-react-apps/    