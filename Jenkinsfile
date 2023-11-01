pipeline {
    agent any
    options {
        timeout(time:1, unit: 'SECONDS')
    }
    stages {
        stage('develop') {
            steps {
                echo 'Develop'
                sh (ls)
            }
        }
          stage('staging') {
            steps {
                echo 'staging'
            }
        }
          stage('main') {
            steps {
                echo 'main'
            }
        }
    }
}