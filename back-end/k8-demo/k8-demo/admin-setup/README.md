# Creating a cluster admin

(From <https://medium.com/@kanrangsan/creating-admin-user-to-access-kubernetes-dashboard-723d6c9764e4>)

1. `kubectl apply -f dashboard-admin-user.yml`
2. `kubectl apply -f admin-role-binding.yml`
3. `kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep admin-user | awk '{print $1}')`
4. Copy massive token and put it into dashboard
