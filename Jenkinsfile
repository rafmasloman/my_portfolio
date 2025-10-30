pipeline {
  agent any

    environment {
    IMAGE_NAME = "rafmasloman22/my-portfolio-fe"
    CONTAINER_NAME = "rafmasloman-porto-fe"
    PORT = "3000"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/rafmasloman/my_portfolio.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          sh "docker build -t ${IMAGE_NAME}:latest ."
        }
      }
    }

    stage('Deploy Application') {
      steps {
        script {
          // stop container lama kalau ada
          sh """
          if [ \$(docker ps -q -f name=${CONTAINER_NAME}) ]; then
            echo "🛑 Stopping old container..."
            docker stop ${CONTAINER_NAME}
            docker rm ${CONTAINER_NAME}
          fi
          """

          // jalankan container baru
          sh """
          echo "🚀 Starting new container..."
          docker run -d --name ${CONTAINER_NAME} -p ${PORT}:${PORT} ${IMAGE_NAME}:latest
          """
        }
      }
    }
  }

  post {
    success {
      echo '✅ Deployment berhasil!'
    }
    failure {
      echo '❌ Deployment gagal!'
    }
  }
}
