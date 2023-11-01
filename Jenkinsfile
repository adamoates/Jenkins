pipeline {
    agent any
    options {
        timeout(time:1, unit: 'SECONDS')
    }
    stages {
        stage('develop') {
            steps {
                echo 'Develop'
            }
        }
          stage('staging') {
            steps {
                echo 'staging'
            }
        }
          stage('Prod') {
            steps {
                echo 'Prod'
            }
        }
    }
}