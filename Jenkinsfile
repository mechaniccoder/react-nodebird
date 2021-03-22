pipeline {
  agent any

  stages {
    stage("Install") {
      steps {
        echo 'Install packages.'
        nodejs('Node-13.9.0') {
          sh 'yarn install'
        }
      }
    }
  }
}