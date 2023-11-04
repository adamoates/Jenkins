pipeline {
    agent any
    options {
        timeout(time:1, unit: 'SECONDS')
    }
    stages {
        stage('build') {
            steps {
                echo 'build'
            }
        }
          
        stage('develop') {
            steps {
                echo 'develop'
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