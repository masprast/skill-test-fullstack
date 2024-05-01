set -e

# db.auth("$MONGO_INITDB_ROOT_USERNAME","$MONGO_INITDB_ROOT_PASSWORD")
    # { role: 'userAdminAnyDatabase', db: 'admin' },
    # { role: 'clustermonitor', db: 'admin' },
# db.grantRolesToUser("$MONGODB_USER",[{ role: "root", db: "admin" }])

echo $MONGO_INITDB_DATABASE

mongosh <<EOF
use admin

db.createUser({
  user: "$MONGODB_USER",
  pwd: "$MONGODB_PASS",
  roles: [
    { role: 'dbOwner', db: '$MONGO_INITDB_DATABASE' },
    'readWrite',
    ],
});
db.getUsers()

use $MONGO_INITDB_DATABASE
db.createCollection("horoscope")
db.createCollection("zodiac")


EOF

# mongosh <<EOF
# rsconf = {
#    _id : "rsmongo",
#    members: [
#        {
#            "_id": 0,
#            "host": "mongodb:27017",
#            "priority": 4
#        },
#        {
#            "_id": 1,
#            "host": "mongo_replica:27017",
#            "priority": 2
#        },
#    ]
# }
# EOF

# mongosh rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'localhost:27017'}]})
# mongosh rs.initiate(rsconf);

# isiDB() {
#   arr_csv=() 
#   while IFS= read -r line 
#   do
#       arr_csv+=("$line")
#   done < $1

#   echo "Processing the contents of array mapped from csv file:"
#   index=1
#   for record in "${arr_csv[@]}"
#   do
#       $2
#     # echo "Record at index-${index} : $record"
#       ((index++))
#   done
# }
