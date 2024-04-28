set -e

mongosh <<EOF
use admin
db.auth("$MONGODB_INITDB_ROOT_USERNAME","$MONGODB_INITDB_ROOT_PASSWORD")

# db.createUser({
#   user: "$MONGODB_USER",
#   pwd: "$MONGODB_PASS",
#   roles: [
#     { role: 'dbOwner', db: 'admin' },
#     # { role: 'userAdminAnyDatabase', db: 'admin' },
#     # { role: 'clustermonitor', db: 'admin' },
#     'readWrite',
#     ],
# });
# db.grantRolesToUser("$MONGODB_USER",[{ role: "root", db: "admin" }])
use $MONGODB_INITDB_DATABASE

db.createCollection("horoscope")
db.createCollection("zodiac")


EOF